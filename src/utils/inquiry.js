'use strict';

var React = require('react');

var INQUIRY_EMAIL = 'contact.profitsols@gmail.com';
var INQUIRY_ENDPOINT = 'https://formsubmit.co/ajax/' + INQUIRY_EMAIL;

function fieldValue(data, name) {
  var value = data.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function submitInquiry(fields) {
  return fetch(INQUIRY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      Name: fields.name,
      Email: fields.email,
      Phone: fields.phone || '—',
      Message: fields.message,
      'Sent from': fields.source,
      _subject: 'New website inquiry from ' + fields.name + ' (' + fields.source + ')',
      _replyto: fields.email,
      _template: 'table'
    })
  }).then(function(res) {
    return res.json().catch(function() { return {}; }).then(function(body) {
      if (!res.ok || String(body.success) !== 'true') {
        throw new Error(body.message || 'Request failed with status ' + res.status);
      }
      return body;
    });
  });
}

/**
 * Wires a <form> with inputs named name, email, phone, message and a hidden
 * honeypot named _honey to the inquiry inbox.
 */
function useInquiryForm(source) {
  var statusState = React.useState('idle');
  var status = statusState[0];
  var setStatus = statusState[1];

  function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    var form = e.currentTarget;
    var data = new FormData(form);

    if (fieldValue(data, '_honey')) {
      form.reset();
      setStatus('sent');
      return;
    }

    setStatus('sending');
    submitInquiry({
      name: fieldValue(data, 'name'),
      email: fieldValue(data, 'email'),
      phone: fieldValue(data, 'phone'),
      message: fieldValue(data, 'message'),
      source: source
    }).then(function() {
      form.reset();
      setStatus('sent');
    }).catch(function(err) {
      // eslint-disable-next-line no-console
      console.error('Inquiry submission failed:', err);
      setStatus('error');
    });
  }

  return { status: status, handleSubmit: handleSubmit };
}

var STATUS_TEXT = {
  sent: 'Thanks — your message has been sent. We’ll get back to you shortly.',
  error: 'Sorry, your message could not be sent. Please email us directly at ' + INQUIRY_EMAIL + '.'
};

function InquiryStatus(props) {
  var text = STATUS_TEXT[props.status];
  return React.createElement('p', {
    className: 'inquiry-status' + (text ? ' inquiry-status--' + props.status : ''),
    role: 'status',
    'aria-live': 'polite'
  }, text || null);
}

function HoneypotField() {
  return React.createElement('input', {
    type: 'text',
    name: '_honey',
    className: 'inquiry-honeypot',
    tabIndex: -1,
    autoComplete: 'off',
    'aria-hidden': true
  });
}

module.exports = {
  INQUIRY_EMAIL: INQUIRY_EMAIL,
  submitInquiry: submitInquiry,
  useInquiryForm: useInquiryForm,
  InquiryStatus: InquiryStatus,
  HoneypotField: HoneypotField
};

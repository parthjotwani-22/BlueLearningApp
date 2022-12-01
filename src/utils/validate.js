const validate_string = data => {
  let nameval = /^([a-zA-Z]{3,15})/;
  if (!nameval.test(data)) {
    return false;
  } else {
    return true;
  }
};
const validate_mail = data => {
  const email_val =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!email_val.test(data)) {
    return false;
  } else {
    return true;
  }
};
const validate_number = data => {
  const number_val = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  if (!number_val.test(data)) {
    return false;
  } else {
    return true;
  }
};

export default {validate_string, validate_mail, validate_number};

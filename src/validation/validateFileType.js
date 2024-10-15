import { doc, docx, pdf } from 'src/validation/validationConstants';

const validateCvType = (file) => {
  const acceptedTypes = [pdf, doc, docx];

  return (
    file === undefined || acceptedTypes.find((type) => file?.type === type)
  );
};

const validatePlanType = (file) => {
  const acceptedTypes = [pdf, doc, docx];

  return (
    file === undefined || acceptedTypes.find((type) => file?.type === type)
  );
};

const validateBookType = (file) => {
  const acceptedTypes = [doc, docx];

  return (
    file === undefined || acceptedTypes.find((type) => file?.type === type)
  );
};

export { validateCvType, validatePlanType, validateBookType };

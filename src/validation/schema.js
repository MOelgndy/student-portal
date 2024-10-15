import { mixed, object, string, number } from 'yup';

import {
  validateBookType,
  validateCvType,
  validatePlanType,
} from 'src/validation/validateFileType';
import {
  maxEmail,
  maxNumber,
  maxPhone,
  maxString,
  maxTextarea,
  minString,
  minTextarea,
} from 'src/validation/validationConstants';

import { FORM } from 'src/data/shared/form';

const require = 'هذا الحقل مطلوب';

const {
  name,
  phone,
  email,
  work,
  address,
  cv,
  researcher,
  researchTitle,
  researchField,
  researchType,
  researchLimits,
  researchImportance,
  plan,
  brief,
  bookTitle,
  attachBook,
  encyclopediaTopic,
  suggestedTopic,
  topicIdea,
  coordinatorName,
  libraryName,
  country,
  city,
  website,
  socialMediaLink,
  numberOfParts,
  author,
  adviceType,
  adviceBrief,
} = FORM;

//===================================
const nameSchema = string()
  .min(minString, name.error.min)
  .max(maxString, name.error.max)
  .required(require);

const phoneSchema = string().max(maxPhone, phone.error.max).required(require);

const emailSchema = string()
  .email(email.error.notValid)
  .max(maxEmail, email.error.max)
  .required(require);

const workSchema = string().max(maxString, work.error.max).required(require);

const addressSchema = string()
  .max(maxString, address.error.max)
  .required(require);

const cvSchema = mixed()
  .test('type', cv.error.type, validateCvType)
  .required(require);

const researcherSchema = string()
  .min(minString, researcher.error.min)
  .max(maxString, researcher.error.max);

const planSchema = mixed()
  .test('type', plan.error.type, validatePlanType)
  .required(require);

const briefSchema = string()
  .min(minTextarea, brief.error.min)
  .max(maxTextarea, brief.error.max)
  .required(require);

const bookTitleSchema = string()
  .min(minString, bookTitle.error.min)
  .max(maxString, bookTitle.error.max)
  .required(require);

const attachBookSchema = mixed()
  .test('type', attachBook.error.type, validateBookType)
  .required(require);
//===================================

const suggestResearchSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [work.name]: workSchema,

  [address.name]: addressSchema,

  [cv.name]: cvSchema,

  [researcher.name]: researcherSchema,

  [researchTitle.name]: string()
    .min(minString, researchTitle.error.min)
    .max(maxString, researchTitle.error.max)
    .required(require),

  [researchField.name]: string()
    .min(minString, researchField.error.min)
    .max(maxString, researchField.error.max)
    .required(require),

  [researchType.name]: string()
    .min(minString, researchType.error.min)
    .max(maxString, researchType.error.max)
    .required(require),

  [researchLimits.name]: string()
    .min(minString, researchLimits.error.min)
    .max(maxString, researchLimits.error.max)
    .required(require),

  [researchImportance.name]: string()
    .min(minString, researchImportance.error.min)
    .max(maxString, researchImportance.error.max)
    .required(require),
});

const reserveTitleSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [work.name]: workSchema,

  [address.name]: addressSchema,

  [cv.name]: cvSchema,

  [researcher.name]: researcherSchema,

  [researchTitle.name]: string().required(require),

  [plan.name]: planSchema,

  [brief.name]: briefSchema,
});

const suggestEncyclopediaSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [work.name]: workSchema,

  [address.name]: addressSchema,

  [cv.name]: cvSchema,

  [researcher.name]: researcherSchema,

  [encyclopediaTopic.name]: string()
    .min(minString, encyclopediaTopic.error.min)
    .max(maxString, encyclopediaTopic.error.max)
    .required(require),
});

const reserveTopicSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [work.name]: workSchema,

  [address.name]: addressSchema,

  [cv.name]: cvSchema,

  [researcher.name]: researcherSchema,

  [researchTitle.name]: string().required(require),

  [brief.name]: briefSchema,
});

const suggestTopicSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [suggestedTopic.name]: string()
    .min(minString, suggestedTopic.error.min)
    .max(maxString, suggestedTopic.error.max)
    .required(require),

  [topicIdea.name]: string()
    .min(minString, topicIdea.error.min)
    .max(maxString, topicIdea.error.max),

  [researcher.name]: researcherSchema,
});

const prog2Schema = object().shape({
  [coordinatorName.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [address.name]: addressSchema,

  [libraryName.name]: string()
    .min(minString, libraryName.error.min)
    .max(maxString, libraryName.error.max)
    .required(require),

  [country.name]: string()
    .min(minString, country.error.min)
    .max(maxString, country.error.max)
    .required(require),

  [city.name]: string()
    .min(minString, city.error.min)
    .max(maxString, city.error.max)
    .required(require),

  [website.name]: string()
    .url(website.error.notValid)
    .max(maxString, website.error.max),

  [socialMediaLink.name]: string()
    .url(socialMediaLink.error.notValid)
    .max(maxString, socialMediaLink.error.max),
});

const prog3Schema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [bookTitle.name]: bookTitleSchema,

  [numberOfParts.name]: number()
    .typeError(numberOfParts.error.notValid)
    .positive()
    .integer()
    .max(maxNumber, numberOfParts.error.max),

  [author.name]: string()
    .min(minString, author.error.min)
    .max(maxString, author.error.max)
    .required(require),

  [attachBook.name]: attachBookSchema,
});

const servicesSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [adviceBrief.name]: briefSchema,
});

const joinUsSchema = object().shape({
  [name.name]: nameSchema,

  [phone.name]: phoneSchema,

  [email.name]: emailSchema,

  [cv.name]: cvSchema,

  [adviceType.name]: string().required(require),
});

export {
  reserveTitleSchema,
  suggestResearchSchema,
  suggestEncyclopediaSchema,
  reserveTopicSchema,
  suggestTopicSchema,
  prog2Schema,
  prog3Schema,
  servicesSchema,
  joinUsSchema,
};

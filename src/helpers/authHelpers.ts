import { localStorageNames } from '../data/localStorage.data';

const getURL = () =>
  window.location?.pathname?.split('/').filter((part) => part !== '');

const extractBasename = () => {
  let result = '/';
  const parsedData = getURL();

  if (parsedData[0] === 'students-portal')
    result = '/students-portal/' + getOrganizationSlug();

  return result;
};

const isStudentPortal = () => {
  const parsedData = getURL();
  return parsedData[0] === 'students-portal';
};

const getOrganizationSlug = () => {
  const parsedData = getURL();

  return (
    parsedData[1] ||
    window.localStorage.getItem(localStorageNames.organizationSlug)
  );
};

const getStudentToken = () =>
  window.localStorage.getItem(localStorageNames.studentAccessToken);

const getOrganizationToken = () =>
  window.localStorage.getItem(localStorageNames.clientAccessToken);

const navigateToLogin = () => {
  const route = isStudentPortal() ? extractBasename() : '';
  window.location.replace(route + '/login');
};

const navigateToHome = (isStudent = isStudentPortal()) => {
  let route = '/';
  if (isStudent) route = extractBasename() + '/';
  //else route = ClientPaths.PROGRAMS;

  window.location.replace(route);
};

const setRefreshToken = (token: string) => {
  window.localStorage.setItem(localStorageNames.refreshToken, token);
};

const setAccessToken = (token: string, isStudent = isStudentPortal()) => {
  const item = isStudent
    ? localStorageNames.studentAccessToken
    : localStorageNames.clientAccessToken;

  window.localStorage.setItem(item, token);
};

const getAccessToken = (isStudent = isStudentPortal()) => {
  const item = isStudent
    ? localStorageNames.studentAccessToken
    : localStorageNames.clientAccessToken;

  return window.localStorage.getItem(item);
};

const getRefreshToken = () =>
  window.localStorage.getItem(localStorageNames.refreshToken);

const removeAllTokens = () => {
  window.localStorage.removeItem(localStorageNames.serviceToken);
  window.localStorage.removeItem(localStorageNames.refreshToken);
  window.localStorage.removeItem(localStorageNames.organizationLogo);

  removeStudentTokens();
  removeClientTokens();
};

const removeStudentTokens = () => {
  window.localStorage.removeItem(localStorageNames.organizationSlug);
  window.localStorage.removeItem(localStorageNames.studentAccessToken);
};

const removeClientTokens = () => {
  window.localStorage.removeItem(localStorageNames.clientAccessToken);
};

export {
  setAccessToken,
  getAccessToken,
  navigateToHome,
  isStudentPortal,
  extractBasename,
  navigateToLogin,
  setRefreshToken,
  getRefreshToken,
  removeAllTokens,
  getStudentToken,
  removeClientTokens,
  removeStudentTokens,
  getOrganizationSlug,
  getOrganizationToken,
};

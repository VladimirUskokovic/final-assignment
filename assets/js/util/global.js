const IS_PRODUCTION = process.env.NODE_ENV !== 'development';
const DEV_PATH = '/final-assignment/public';
const PROD_PATH = '';
const PATH = IS_PRODUCTION ? PROD_PATH : DEV_PATH;
const REACT_PATH = `${PATH}/client`;

export default {
  IS_PRODUCTION,
  PATH,
  REACT_PATH
};

import axios from 'axios';

class RestJs {
  static find = (url, callBack) => {
    axios
      .get(url)
      .then((result) => {
        callBack(result.data);
      })
      .catch((error) => {
        console.log(error); // Remove after development phase
        callBack(null);
      });
  };

  static save = (url, request, callBack) => {
    axios
      .post(url, request)
      .then((result) => {
        callBack(result.data);
      })
      .catch((error) => {
        console.log(error); // Remove after development phase
        callBack(null);
      });
  };

  static update = (url, request, callBack) => {
    axios
      .put(url, request)
      .then((result) => {
        callBack(result.data);
      })
      .catch((error) => {
        console.log(error); // Remove after development phase
        callBack(null);
      });
  };

  static delete = (url, callBack) => {
    axios
      .delete(url)
      .then((result) => {
        callBack(result.data);
      })
      .catch((error) => {
        console.log(error); // Remove after development phase
        callBack(null);
      });
  };
}

export default RestJs;

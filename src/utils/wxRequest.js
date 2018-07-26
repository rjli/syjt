import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  if (!params.loading) {
    tip.loading();
  }
  let data = params.query || {};
  // data.sign = SIGN;
  // data.time = TIMESTAMP;
  console.log(data);
  console.log(url);
  console.log(params.method);
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'Content-Type': 'json'
    },
  });
  console.log(res);
  if (!params.loading) {
    tip.loaded();
  }

  return res;
};


module.exports = {
  wxRequest
}

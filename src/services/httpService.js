const TIMEOUT = function (s = 10) {
	return new Promise((_, reject) => {
		return setTimeout(() => {
			reject(new Error(`Request Took Too long Timeout aftre ${s} seconds!`));
		}, s * 1000);
	});
};

export const get = async function(url){
   try {
      const fetchPromise =  fetch(url);
      const res = await Promise.race([fetchPromise, TIMEOUT()]);
      const data = await res.json()
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data
   } catch (err) {
      throw err
   }

}

const http =  {
   get,
}

export default http
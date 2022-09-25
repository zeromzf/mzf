import axios from "axios";
axios.interceptors.request.use((cfg)=>{
	 return cfg;
	// console.log('请求拦截器');
})
axios.interceptors.response.use((res)=>{
	// console.log(res);
	return res.data
})
export default axios
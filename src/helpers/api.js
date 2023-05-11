import * as axios from 'axios';

export default class Api {

    constructor(){
      this.api_token = null;
      this.client = null;
      this.api_url = process.env.REACT_APP_API_URL;  
    }

    init = ()=>{
        this.api_token = localStorage.getItem('api_token')
  
        let headers = {
          'Accept':'application/json'
        }
  
        // if(this.api_token){
        //   headers.Authorization = `Bearer ${this.api_token}`
        // }
  
        this.client = axios.create({
          baseURL: this.api_url,
          timeout: 31000, 
          headers: headers,
        })
  
        return this.client
    }

    getSkillList = (params)=>{
      return this.init().get(`/skill`,{params});
    }

    getProfileShow = ()=>{
      return this.init().get(`/profile/show`);
    }

    getPortfolioList = (params)=>{
        return this.init().get(`/portfolio`,{params});
    }

    viewPortfolioImageByPortfolioId(portfolioId){
        return this.init().get(`/portfolio_image/show/${portfolioId}`);
    }

}
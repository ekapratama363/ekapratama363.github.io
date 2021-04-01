import * as axios from 'axios';

export default class Api {

    constructor(){
      this.api_token = null;
      this.client = null;
      this.api_url = 'https://cv-eka-be.herokuapp.com/api/v1';        
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

    getSkillList = ()=>{
      return this.init().get(`/skill`);
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
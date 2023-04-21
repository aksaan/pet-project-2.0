import { createStore } from 'vuex'
const store = createStore({
    state(){
      return {
        user : false,
        auth : false,
        token : false,
        value : false,
        dadata_token : '86b2c5f1d70ab5267f205db70a10010eef7c973c'
      }
    },
    actions : {
      async registration(ctx, user){
        let data = JSON.stringify(user);
        const res = await fetch("https://pets.aprograms.ru?class=User&action=reg", {
          method: "POST",
          headers : {
            "Content-Type" : "appication/json;charset=utf-8"
          },
          body: data
        })
        console.log(res);
        if(res.ok){
          let result = await res.json();
          return(result);
        }
      },
      async authorization (ctx, user){
        let data = JSON.stringify(user);
        const res = await fetch("https://pets.aprograms.ru/?class=User&action=auth", {
          method: "POST",
          headers : {
            "Content-Type" : "appication/json;charset=utf-8"
          },
          body: data
        })
        console.log(res);
        if(res.ok){
          let result = await res.json();
          console.log(result);
          ctx.commit("setAuth", {
            token : result.Access_token,
            user: result.user,
          });
          return result.Refresh_token;
        }
        return false;
      },
      async editUser(ctx, user){
        let data = JSON.stringify({auth: ctx.state.token, ...user});
        const res = await fetch("https://pets.aprograms.ru?class=User&action=change", {
          method: "PUT",
          headers : {
            "Content-Type" : "appication/json;charset=utf-8"
          },
          body: data
        })
        return res.ok;
      },
      async exit(ctx){
        ctx.commit("logout");
        return true;
      },
      async stayOnline(ctx,Refresh_token){
      }, 
      async dadata(ctx, query){
      let token = ctx.state.dadata_token
      const res = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
        },
      onSelect: function(suggestions){
        console.log(suggestions);
      },
        body : JSON.stringify({query: query})
        })
        console.log(res);
          if(res.ok){
            let result = await res.json();
            return(result);
        }
      }
    },
    mutations : {
      setAuth(state, {token, user}){
        console.log(user);
        state.auth = true;
        state.token = token;
        state.user = user;
      },
      logout(state){
        state.auth = false;
        state.token = false;
        state.user = false;
      }
    },
    getters : {}
  }
)

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
export default store
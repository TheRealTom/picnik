





signup(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).then((u)=>{console.log(u)})
  .catch((error) => {
      console.log(error);
    })
}

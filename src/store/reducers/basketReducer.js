const initState = {
  basket: [
    {id:'0',title:'Cake',description:'recepty na nejv�c top dort�ky a kol��e pod sluncem'},
    {id:'1',title:'Liborovi na dobrou noc',description:'N�co co ho pot��� a uti�� jeho choutky'},
    {id:'2',title:'Skola',description:':) Commit or Push, In Fortnite I am always in a bush'},
  ]
}

const basketReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BASKET':
      console.log('created project', action.project)
  }
  return state
}

export default basketReducer

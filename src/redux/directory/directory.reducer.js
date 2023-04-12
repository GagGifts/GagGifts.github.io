const INITIAL_STATE = {
  sections: [
    {
      title: 'mugs',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/mugs'
    },
    {
      title: 'food',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/food'
    },
    {
      title: 'birthdays',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/birthdays'
    },
    {
      title: 'electronics',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/electronics'
    }
  ]
}

const dicretoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default dicretoryReducer;
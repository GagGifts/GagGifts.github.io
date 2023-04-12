const INITIAL_STATE = {
  sections: [
    {
      title: 'mugs',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Please%20Mute%20Your%20Mic%20Mug.png?alt=media&token=a839ce28-194a-4567-a97d-4f5b2dfa0d7d',
      id: 1,
      linkUrl: 'shop/mugs'
    },
    {
      title: 'food',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/White%20Candy.png?alt=media&token=05916751-db41-4ac0-be7a-fe5eaba7a39b',
      id: 2,
      linkUrl: 'shop/food'
    },
    {
      title: 'birthdays',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Cigarette%20Birthday%20Candle.png?alt=media&token=5697f46c-c6c4-460c-bce9-f96b97d8a9d5',
      id: 3,
      linkUrl: 'shop/birthdays'
    },
    {
      title: 'electronics',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Giant%20Enter%20Button.jpg?alt=media&token=9aefb7da-64e9-4ed7-965d-16ed6da66472',
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

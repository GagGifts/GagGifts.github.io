const INITIAL_STATE = {
      sections: [
            {
                  title: 'mugs',
                  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Mugs%20Category%20Image.jpg?alt=media&token=f7517a86-e3f5-4185-9f7e-ed02f2c90c12',
                  id: 1,
                  linkUrl: 'shop/mugs'
            },
            {
                  title: 'food',
                  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Food%20Category%20Image.png?alt=media&token=86ac333a-8961-456f-b40f-b040e29dcc03',
                  id: 2,
                  linkUrl: 'shop/food'
            },
            {
                  title: 'birthdays',
                  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Birthdays%20Category%20Image.jpg?alt=media&token=ad6875cc-8b2d-4103-b205-98406e271fe0',
                  id: 3,
                  linkUrl: 'shop/birthdays'
            },
            {
                  title: 'electronics',
                  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Electronics%20Category%20Image.jpg?alt=media&token=71f664a0-414c-439c-97a9-1a6cb7209f7f',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/electronics'
            },
            {
                  title: 'clothing',
                  imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gag-gifts.appspot.com/o/Clothing%20Category%20Image.png?alt=media&token=64363ccd-9b51-40d5-abc0-e5068d523b62',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/clothing'
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
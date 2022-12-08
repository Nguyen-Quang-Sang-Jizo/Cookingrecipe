let Cookingrecipe = {
    foodName: 'Suon xao chua ngot',
    ration: 4,
    ingredient: ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
}
console.log('Ten mon an: ' + Cookingrecipe.foodName);
console.log('Khau phan: ' + Cookingrecipe.ration);
console.log('Nguyen lieu:');
for (let i = 0; i < Cookingrecipe.ingredient.length; i++) {
    console.log('-' + Cookingrecipe.ingredient[i]);
}
var letters = [
    {letter:"A", word:"Apple", image:"images/apple.jpeg"}, 
    {letter:"B", word:"Ball", image:"images/ball.jpeg"},
    {letter:"C", word:"Clarinet", image:"images/clarinet.jpeg"},
    {letter:"D", word:"Dog", image:"images/dog.jpeg"},
    {letter:"E", word:"Egg", image:"images/egg.jpeg"},
    {letter:"F", word:"Fish", image:"images/fish.jpeg"},
    {letter:"G", word:"Goat", image:"images/goat.jpeg"},
    {letter:"H", word:"House", image:"images/house.jpeg"},
    {letter:"I", word:"Ice-Cream", image:"images/ice-cream.jpeg"},
    {letter:"J", word:"Jug", image:"images/jug.jpeg"},
    {letter:"K", word:"Key", image:"images/key.jpeg"},
    {letter:"L", word:"Lion", image:"images/lion.jpeg"},
    {letter:"M", word:"Mango", image:"images/Mango.jpeg"},
    {letter:"N", word:"Nose", image:"images/nose.jpeg"},
    {letter:"O", word:"Owl", image:"images/owl.jpeg"},
    {letter:"P", word:"Parrot", image:"images/parrot.jpeg"},
    {letter:"Q", word:"Queen", image:"images/queen.jpeg"},
    {letter:"R", word:"Rabbit", image:"images/rabbit.jpeg"},
    {letter:"S", word:"Ship", image:"images/ship.jpeg"},
    {letter:"T", word:"Trumpet", image:"images/trumpet.jpeg"},
    {letter:"U", word:"Unicorn", image:"images/unicorn.jpeg"},
    {letter:"V", word:"Violin", image:"images/violin.jpeg"},
    {letter:"W", word:"Watch", image:"images/watch.jpeg"},
    {letter:"X", word:"Xylophone", image:"images/xylophone.jpeg"},
    {letter:"Y", word:"Yam", image:"images/yam.jpeg"},   
    {letter:"Z", word:"Zebra", image:"images/zebra.jpeg"}
];

var currentIndex = 0;

function displayCurrentItem() {
    var currentItem = letters[currentIndex];
    document.getElementById("myDisplay").innerHTML = currentItem.letter + " for " + currentItem.word;
    document.querySelector("img").setAttribute("src", currentItem.image);
}

displayCurrentItem(); // Display the first item when the page loads

function handleNext() {
    if (currentIndex < letters.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first item
    }
    displayCurrentItem();
}

function handlePrevious() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = letters.length - 1; // Go to the last item
    }
    displayCurrentItem();
}

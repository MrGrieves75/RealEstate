let neuralNetwork;

function setup() {
  createCanvas(800, 600);
  neuralNetwork = new NeuralNetwork(200, undefined, 400, 500);
  neuralNetwork.createNeuralNetwork(4, 5 , 1);
  neuralNetwork.randomOutput();
  neuralNetwork.setOneInputNeuronLabel("Surface" , 0);
  neuralNetwork.setOneInputNeuronLabel("Ville" , 1);
  neuralNetwork.setOneInputNeuronLabel("Année" , 2);
  neuralNetwork.setOneInputNeuronLabel("Pièces" , 3);
  
}

function draw() {
  background(255);
  neuralNetwork.update(); 
  neuralNetwork.render();
}

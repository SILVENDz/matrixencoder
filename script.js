const encodingMatrix = [
  [1, 1],
  [2, 3]
];
const decodingMatrix = [
  [3, -1],
  [-2, 1]
];

function multiplyMatrixVector(vector, matrix) {
  return [
    vector[0] * matrix[0][0] + vector[1] * matrix[1][0],
    vector[0] * matrix[0][1] + vector[1] * matrix[1][1]
  ];
}

function charToNumber(char) {
  if (char === ' ') {
    return 0;
  }
  return char.toUpperCase().charCodeAt(0) - 64;
}

function textToNumbers(text) {
  return [...text].map(charToNumber);
}

function encodeMessage() {
  const message = document.getElementById('message').value;
  const numbers = textToNumbers(message);
  const pairs = [];

  for (let i = 0; i < numbers.length; i += 2) {
    pairs.push([
      numbers[i],
      numbers[i + 1] ?? 0
    ]);
  }

  const encoded = pairs.map(pair => multiplyMatrixVector(pair, encodingMatrix));
  document.getElementById('result').textContent = encoded.flat().join(' ');
}

function decodeMessage() {
  const input = document.getElementById('encodedMessage').value;

  const numbers = input
    .trim()
    .split(/\s+/)
    .map(Number);

  const pairs = [];

  for (let i = 0; i < numbers.length; i += 2) {
    pairs.push([
      numbers[i],
      numbers[i + 1] ?? 0
    ]);
  }

  const decoded = pairs.map(
    pair => multiplyMatrixVector(pair, decodingMatrix)
  );

  const decodedText = decoded
    .flat()
    .map(numberToChar)
    .join('');

  document.getElementById('decodedResult').textContent = decodedText;
}

function numberToChar(number) {
  if (number === 0) {
    return ' ';
  }

  return String.fromCharCode(number + 64);
}

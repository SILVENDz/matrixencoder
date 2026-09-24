# Matrix Decoder
## What is "Matrix Decoder"?
* Matrix decoder is an encoder/decoder webpage that can transform any input into a series of matrices. It can also use those matrices to decode for the original message. Additionally, it includes many resources (images and textual explanation) to explain the process behind using matrices for cryptography.
<img width="1781" height="656" alt="Screenshot 2026-09-23 at 7 41 19 PM" src="https://github.com/user-attachments/assets/02ec7fcf-9abc-49b9-ba64-28ff64722924" />

## Try it yourself!
Hey, do you want a different method of encoding messages? Well, here is a playable demo of my Matrix encoder/decoder!!
https://silvendz.github.io/matrixencoder/
You only need to click on it, grab a buddy, and get started!

## Features:
* Navigation bar in order for the user to be able to move across pages easily
* Encoding feature that transforms any text input into a series of matrices. This is done through multiplying a key(or encoding) matrix by the numerical values assigned to each letter.
* A decoding feature that transforms encoded input into its alphabetical output. This process is the inverse (literally) of the encoding process. The inverse matrix of the key matrix is taken and then multiplied by the input. This will give you a series of number. Using a letter to number key, this series of numbers can be translated into the actual message
* Besides the actual encoder/decoder, my mission is to spread my personal love for math!! For that reason, I included a section that explains how the decoder/encoder works
* This guide includes a step-by-step textual guidance and graphics (made by me!)
<img width="1790" height="946" alt="Screenshot 2026-09-23 at 7 42 14 PM" src="https://github.com/user-attachments/assets/d19e4a81-ad09-47bb-aae4-07a55f219211" />

* A button that leads to a more into depth guide about matrices, multiplication, and inverse matrices.
* Additionally, all of the containers are scrollable so that the UI is not as cluttered!!
<img width="1789" height="939" alt="Screenshot 2026-09-23 at 7 42 57 PM" src="https://github.com/user-attachments/assets/23a99afa-eaff-4875-8933-bf8f6fef894a" />

## How does it work?
* This project was created using HTML, CSS, and JS
* HTML was used for the layout of the webpage, such as the navigation bar, containers, and the inclusion of graphics
* Javascript was used for the actual encoding and decoding features of my website
* The char to number feature of my code assigns a numerical value to each letter. For example, A would equal to 1
* The numbers derived from the input are arranged into a 1x2 matrix (so a pair of numbers)
* Any message with odd numbers will have a pair with a zero at the end
* These pairs are multiplied by the constant key/encoding matrices
* To decode, the numbers inputted are arranged into pairs
* These pairs are multiplied by the inverse matrix

<img width="957" height="396" alt="Screenshot 2026-09-23 at 8 24 03 PM" src="https://github.com/user-attachments/assets/8cfff9af-a6f2-4182-839f-afd330d812d7" />
<img style="object-fit:cover;" width="957" height="840" alt="Screenshot 2026-09-23 at 8 32 54 PM" src="https://github.com/user-attachments/assets/9d6fe1a5-8ab1-4b1e-9023-0ef582c63ad5" />

## Credits
* Utilized images from charchithowizer and other math journals/blogs in the "More about Matrices" page

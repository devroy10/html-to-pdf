# Webpage-to-PDF

This project is a Node.js script that uses Puppeteer to convert a webpage to a PDF file. The generated PDF is stored in an outputs directory with a filename based on the base URL of the website and a timestamp to ensure uniqueness.

## Prerequisites

- **Node.js**: You can download and install [Node.js](https://nodejs.org)
- **Google Chrome or Chromium**: Ensure you have Google Chrome or Chromium installed. You can download [Chrome](https://google.com/chrome) here

## Installation

- Clone the repository or create a new directory for the project:

```sh
mkdir webpage-to-pdf
cd webpage-to-pdf

```

- Initialize the project:

```sh
npm install

```

## Running the Project

- Open your preferred terminal application
- Navigate to the Directory:

```
cd path/to/webpage-to-pdf
```

## Usage/Examples

To run the script and convert a webpage to a PDF, use the following command:

```
node convert.js <website_url>

```

Replace <website_url> with the URL of the website you want to convert to PDF. For example:

```
node convert.js https://example.com/label/title.html
```

The generated PDF will be saved in the `outputs` folder with a filename based on the base URL and a timestamp, e.g., outputs/example-2024-07-26T14-45-30-000Z.pdf.

## Troubleshooting

- **TimeoutError:** If you encounter a TimeoutError: Navigation timeout of 30000 ms exceeded, you can increase the timeout duration in the script by updating the timeout option in the goto method.

- **Executable Path:** Ensure that the executablePath in the script is correctly set to the path of your Chrome or Chromium executable.
## Authors

[@devroy10](https://www.github.com/devroy10)

## 🚀 About Me

I'm a frontend developer by heart, and enjoy exploring the web and creating useful and relatable software ...


## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

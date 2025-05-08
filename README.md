# EZ (eazy) YouTube Embed
A lightweight TypeScript package for generating YouTube embed iframes with ease. Simply provide the YouTube video URL and optional iframe properties, and the package creates a fully functional embed iframe.
## Installation
Install the package via npm:
npm install ez-youtube-embed

## Usage
Import the package and use the createYouTubeEmbed function to generate a YouTube embed iframe.
Example
import { YTEmbed } from 'easy-youtube-embed';

...
return (
...
    <YTEmbed 
    url="https://www.youtube.com/watch?v=mmqDYw9C30I" // Youtube Video url
...
)


## Parameters
The createYouTubeEmbed function accepts an object with the following properties:

url (string, required): The YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID).
width (string | number, optional): The width of the iframe. Defaults to '560'.
height (string | number, optional): The height of the iframe. Defaults to '315'.
title (string, optional): The title attribute for the iframe. Defaults to 'YouTube video player'.
allow (string, optional): Custom allow attribute for the iframe. Defaults to 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'.
and all the other iframe tag attibutes are supported

## Return Value
The function returns an HTMLIFrameElement configured with the provided properties and the correct YouTube embed URL.
Features

## Automatically converts YouTube watch URLs (youtube.com/watch?v=) or shortened URLs (youtu.be/) to embed URLs.
Type-safe with TypeScript.
Supports all standard iframe attributes for customization.
Lightweight with no external dependencies.

## Requirements

Node.js >= 14
TypeScript >= 4.5 (if using TypeScript)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to the branch (git push origin feature-name).
Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
Issues
If you encounter any issues or have feature requests, please file an issue on the GitHub Issues page.

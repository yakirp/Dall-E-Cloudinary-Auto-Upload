[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyakirp%2FDall-E-Cloudinary-Auto-Upload&env=OPENAI_API_KEY&envDescription=The%20OpenAI%20API%20uses%20API%20keys%20for%20authentication.%20Visit%20your%20API%20Keys%20page%20to%20retrieve%20the%20API%20key%20you'll%20use%20in%20your%20requests.&envLink=https%3A%2F%2Fbeta.openai.com%2Faccount%2Fapi-keys&project-name=dall-e-cloudinary-auto-upload&repo-name=dall-e-cloudinary-auto-upload)



## Dall-E with Cloudinary Auto Upload.

### Use this Vercel function to fetch images from Dall-E APIs dynamically.

#### How to integrate?

1. ##### [Deploy](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyakirp%2FDall-E-Cloudinary-Auto-Upload&env=OPENAI_API_KEY&envDescription=The%20OpenAI%20API%20uses%20API%20keys%20for%20authentication.%20Visit%20your%20API%20Keys%20page%20to%20retrieve%20the%20API%20key%20you'll%20use%20in%20your%20requests.&envLink=https%3A%2F%2Fbeta.openai.com%2Faccount%2Fapi-keys&project-name=dall-e-cloudinary-auto-upload&repo-name=dall-e-cloudinary-auto-upload) with Vercel
2. ##### Configuring auto-upload URL mapping on your Cloudinary account
    -  ###### Go to your [Cloudinary settings page](https://console.cloudinary.com/settings/upload)
    -  ###### Fill in the Folder name or path for the auto-upload mapping e.g. `dall-e`. 
    -  ###### Fill in a URL prefix that will be mapped to your vercel project e.g.  `<your Vercel project url>/api/dall-e/`

##### That's all. 

### Use:
`https://res.cloudinary.com/<your cloud name>/image/upload/f_auto,q_auto/dall-e/512 (or 256 | 1024)/blue cat`


## Author
[Yakir Perlin](https://github.com/yakirp)







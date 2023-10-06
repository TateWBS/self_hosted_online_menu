
# Getting Started
- RunTime: NodeJS 18.x LTS (earlier may work, but later versions are better)
- Coding Language: Javascript (JSX)
- Storage Type: JSON
- Install Dependencies: 
    `npm install` 
- Get it launched with 
    `npm start`

# It's not working what do I do?
- Make sure you have the latest version of npm/yarn installed
- Make sure you're in the correct folder when installing packages
- Make sure react-scripts is installed globalled ex.
- If `npm start` doesn't bring up a tab, check if npm is installed and that you ran `npm install`

If you want a more up to date and feature packed online menu? [Try this!](https://www.tatewbs.com/services/menu-hosting)

# It's 100% working, what now
- Once you look through the code and get grasp on how its structured.
1. You can edit any code within this to fit your requirement.
2. Most of your editing will be in the `App.jsx` & `list.json` files.
3. Most of the imports and code is done for you, so open `App.jsx` and scroll to 
```
  const [appetizer] = useState(
    list.appetizer.map((obj, i) => {
      return (
        <tr key={i} onClick={() => setMenu({ food: obj.food, shortDescription: obj.shortDescription, price: obj.price, image: obj.image, description: obj.description })}>
          <td>{i + 1}</td>
          <td className="text-decoration-underline">{obj.food}</td>
          <td>{obj.shortDescription}</td>
          <td>${obj.price.toString()}</td>
        </tr >
      )
    })
  );
  ```
4. Usually you can just copy and paste this code and you only need to change the name in the square brackets and after the `list.appetizer` (ex. `list.appetizer2`).
5. You may have ran into an error by now, trust me [this](https://www.tatewbs.com/services/menu-hosting) is a lot easier to use!
6. So likely the error came from `const [appetizer]` this is a variable and all you need to do on your pasted code is change `[appetizer]` to a different name. Yeah! It's that simple.
7. After you change your pasted code and changed that variable name to `const [appetizer2]` scroll down a little ways.
8. So this part requires HTML code and all you need to do is find `{/* Your first Category */}` and copy all the code between that and `{/* End of your first category */}`
9. After you successfully copied that code find `{/* Paste your first category under here to create a second category */}` and paste what you just copied below it!
10. This part is HTML code, it structures the tables and displays the contents of your online menu's items!
11. You may notice a familiar foe, `appetizer` >:( this guy is in our way! On the pasted code just change it to `appetizer2`
12. You may want to add your owns items now, in the files find `list.json`, this is our storage file (aka, Where your menu items live)!
13. So if all goes well you'll see `appetizer` and `appetizer2`, you can change this information to fit your needs, but more importantly is how it's structured!
14. This one is complicated to explain but here is a [link to JSON documentation](https://www.json.org/json-en.html)
15. After all that reading you must be tired (Guess how I was when I wrote all of this!). Also ad time [TateWBS](https://tatewbs.com) is an awesome company that can build your dream web application! Send us a message or an email, we would love to hear from you!
16. Okay, lets get back to the `list.json` file! If you use a text editor that can read the json file then this will be easy. If not, then I wish you the best of luck!
17. Our JSON file has 3 main components: a Unique Name (appetizer & appetizer2), the Square Brackets ( "appetizer": [...some menu items]), and finally the menu items that go inside the square brackets!
18. Let's focus on the Unique Name and the Menu Items. Each item under `appetizer` and `appetizer2` has a food name, shortDescription, description, price and an image.
19. In this example each category (`appetizer` and `appetizer2`) have 3 items each. If you look at your opened browser tab of the website you'll see a lot of the information is the same!
20. Edit the information to match what you need and to add more you can copy and paste the items and their curly brackets! (`{}` <- those guys)
21. Whew! We're almost there and that was a lot of work! If you're still keen on using this Online Menu then continue on, [TateWBS](https://www.tatewbs.com) has an awesome [Online Menu](https://www.tatewbs.com/services/menu-hosting) that you can use!
22. If you need more help on JSON data/formatting, you can try and reach out on our [discord](http://discord.tatewbs.com) but don't support for this build! 
23. You may want to add an image of the item you're adding, we made a couple of convient ways for you add images to a specific item!
24. You can upload your image to an image bucket (ex. imgur, dropbox, some other image bucket with public image access). You can skip to #28 if you dont want to deal with images!
25. If you want to add your images to the project itself, find our `public/` folder.
26. Seems like there are a few files here, no worries! Find the `image/` folder and add your images to the `food/` folder.
27. Come back to your `list.json` and add the public link to the `"image": "Link to image"`. If you added one to your `image/food/` folder, make sure its your domain like this: `http://yourdomain.com/image/food/myfooditem.png`
28. Your image will not show up until after you `run the build command` and `deploy your site` if you added it to the `public/image/food/` folder!
29. That **Placeholder Image** is really annoying, lets change that! Grab your logo and replace that file!
30. Unless your logo image is specifically named `logo.jpg`, it won't change. If that's the case just dive into the `App.jsx` file and find `import logo from './images/logo.jpg';` and change that `logo.jpg` to your file's name and extension!
31. Let's change our `index.html` file so when you deploy it, it can be found out in the wild internet!
32. Let's find 
```
  <title>My Menu Title</title>
  <meta name="title" content="My Menu Title">
  <meta name="description" content="My Menu Description">
```
and change `My Menu title` and `My Menu Description` to whatever you want!



# Okay, I'm done what do I do?
- Make a production build with
    `npm run build`
- You should have a `build/` folder be created, make sure to deploy that!
- Have a production server ready to go and deploy it the build folder that was created!

**NOTICE: We do not offer support for this build**

Check our [discord](http://discord.tatewbs.com) for information! 

Made with love by TateWBS (Version 1.0)
# Day 11: [Hotel Booking Screen](http://localhost:3000/challenges/11) - 🏨 [🔗](http://localhost:3000/challenges/11)

Namaste, fellow coders! Let's dive into the design and implementation of this challenge.

## Design 🎨

For medium and large screens, I stuck to the original design. However, for mobile screens, there was no provided design. So, I decided to go with a flex layout, placing the Carousel at the top and the booking form below. This way, users can first feast their eyes on the property images, and if they like what they see, they can proceed with booking.

But here's the twist! For larger screens, I used a grid layout, allocating 1 column span for the form and 3 for the Carousel. This gives a nice balance and makes the most of the available screen real estate.

One challenge I encountered was the placement of the Carousel in the desktop design. It was on the left, making it the second element when we change the direction to flex. However, I wanted to show it on top. To achieve this, I used `column-reverse` for flex direction instead of `column`. We could also achieve the same result with the `order` property, but since there were only two elements here (Booking Form and Carousel), I opted for `column-reverse`. If we had more elements and needed more control over the order, we could use the `order` property.

## Implementation 💻

For the implementation, I used the following technologies:

- [Next.js](https://nextjs.org/)
- React Aria components:
  - [DateRangePicker](https://react-spectrum.adobe.com/react-aria/DateRangePicker.html)
  - [RangeCalendar](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html)
  - [Select](https://react-spectrum.adobe.com/react-aria/Select.html)
  - [Button](https://react-spectrum.adobe.com/react-aria/Button.html)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/examples/)
- [Tailwind CSS](https://tailwindcss.com/)

## Screenshots 📸

Here's a look at the final implementation on different devices:

### Desktop View

![screenshot of Desktop View](/public/SolutionScreenshot/HotelBooking_Deskto.png)

### Mobile View

![screenshot of Mobile View](/public/SolutionScreenshot/HotelBooking_Mobile.png)

## Key Learnings 📚

- **The construction of an accessible Date range selector** with React Aria Date Range Picker was a significant learning point. This component provides a user-friendly way to select a date range, which is crucial for a hotel booking system.
- **Styling the React Aria Date Range Picker with Tailwind** was another key learning. Tailwind CSS is a utility-first CSS framework that allows for highly customizable designs. Learning to style components with Tailwind can greatly enhance the look and feel of an application.
- **Building an accessible carousel using React Aria components** was another important learning. Carousels are a common feature in many web applications, and learning to build an accessible one is a valuable skill.
- **Applying animations with Framer Motion** was a valuable learning experience. Framer Motion is a powerful library for animations, and learning to use it can greatly enhance the user experience of an application.

## Reflections 💭

This challenge was quite the adventure! I usually use a library for date pickers and have never built one using a headless component. It was a challenging yet rewarding experience. I am now more confident and comfortable using React Aria components. The best part is the flexibility it offers in styling the components.

However, I believe there is room for improvement in the mobile design part. Ideally, users should be able to swipe and see the images instead of clicking on the image strip.

## Next Steps 🚀

- Explore more about React Aria components to see how we can control the display of the date.
- Modify the placement of the Calendar depending on the screen size. In the initial design on Desktop, it opens on the left side. However, in my implementation, it is currently opening at the bottom right side.

## Challenge Details

- [Home Page](https://thejsdevelope-bds-challenges.vercel.app/)
- [All Challenges](https://thejsdevelope-bds-challenges.vercel.app/challenges)
- [Big dev Soon Challenge](https://app.bigdevsoon.me/challenges)
- [Github Repo](https://github.com/thejsdeveloper/bds-challenges)

Stay tuned for more updates as I continue my journey through the 100 UI challenge! Let's keep learning and growing together! 🎉

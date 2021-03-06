# HTML CSS THREE

In this lecture we discuss media queries, and animations.

## Responsive Design

Responsive design is the process of building an applications user interface (UI) to adjust and be dynamic based on the size of the device being used to access it.

In older websites, they were not created with responseive design. If it scaled down to the viewport size of an iPhone, they would terrible. Take a look at https://www.spacejam.com/archive/spacejam/movie/jam.htm for an example.

In newer websites, it is now a standard to make sure that your site is mobile responsive and looks and feels clean. A great example of this would be this watch website https://tinkerwatches.com/.

The reason it's so important that we need to make sure our sites are mobile responsive is becauase more people are consuming the internet on mobile devices or tablets. There are 1.2 billion web users world wide and 48% of them primarily use the internet on their mobile device.

When bulding your application there are three platforms we want to keep in mind that we are developing for. `mobile`, `tablet`, and `desktop`.

![resposive design](images/responsive.jpg)

### Extraction

The `extraction` process of building an application is where to start from `desktop` and make your way down to smaller devices.

This process usually leads to a killer desktop application that is very rich with features. The problem that this introduces is that when you need to start extracting your features to a mobile view, it can be very difficult to include all of the features due to lack of room on the device viewport and you'll application loses it's strong feel and the mobile view is just an "after thought".

### Enhancement

The `enhancement` process is where you decide what core features should exist on the `mobile` view and then make your way up to the `desktop` size.

This will allow you to add features into your app as you scale up with the view port size. This is also known as `mobile first` development. The app will now feel like a solid app and not just an "after thought".

It's easier to scale up then it is to reduce down.

## Media Queries

In CSS, we can use `media queries` to help create a `responsive design`.

A `media query` is a set of CSS rules that will dynamicaly change how our elements are being displayed to the screen based on the view port size of the device being used from the user that is accessing our page.

The syntax for writing a media query looks like the following.

```css
@media (max-width: 500px) {
    /* New Styles To Apply Based On Width */
    .navbar {
        background: tomato;
    }
}
```

We will define that it is a media query by using the `@media` statement. In the parenthesis, we will specify what width of the view port these sizes will be applied to. Inside the curly braces, we select the styles that will be applied when the condition inside the parenthsis is met.

The value pased into the parenthesis is what will define our `break point`. We can use the break point to be specific as to when this styling gets applied. We will usually set a break point with a `min-width` or `max-width` value.

![break points](images/breakpoints.png)

### Min Width

Min width is the value we can use to declare that this is the lowest point of screen size that the styles will be applied. This means that the styles will be applied when the view port width is higher than the `min-width` value.
 
```css
@media (min-width: 500px) {
    /* Styles will only be applied when view port width is 500px and above */
    .navbar {
        background: orange;
    }
}
```

### Max Width

Max width is the value we can use to declare what the highest point of the screen width is to apply the styling. This means that the styles will be applied if the view port width is smaller than the max width value.

```css
@media (max-width: 500px) {
    /* Styles will only be applied when view port width is 500px and lower */
    .navbar {
        background: orange;
    }
}
```

You can use these interchangeably, but it's best just to stick with one or the other to make your code more clear.

## Animations

Animations will transform elements on our web page. This is an excellent way to pull in a users attention and really attract them to our site, if they are done right.

If they are not done right, it can be extremely distracting and unpleasent. Take a look at this site for a good example of what bad animations look like https://www.lingscars.com/.

On the other hand, if animations are done right it will really make your site stand out and really pull in the users attention to your page. This site does an insanely good job at what killer animations can do https://www.theglyph.studio/#home.

One way we can create animations is by using a `keyframe`.

### Keyframes

Keyframes are a great way that we can be specific when creating some sort of animation. we will use the `@` sign to declare a keyframe with a name to reference it as.

```css
@keyframes spin {
    
}
```

There are multiple ways that we can apply styles using a key frame. The first is `from` and `to`. This is where we can define a set of style rules from the start to the finish.

```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
}
```

Then next way is using percentages inside of the animation, so we can be even more specific about how the animation will work.

```css
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
    0% {
        transform: rotate(0deg);
    }
}
```

Now that we have created the animation, we now need to tell an element to use it.

```css
.square {
    height: 75px;
    width: 75px;
    background: peachpuff;
    /* tells what animation to use */
    animation-name: spin;
    /* tell how long to run animation */
    animation-duration: 2s;
    /* specify how many times the animation should run */
    animation-iteration-count: infinite;
    /* we can change the animations direction */
    animation-direction: alternate-reverse;
    /* we can smooth our animations */
    animation-timing-function: linear;
}
```

Notice how these animations are always. We can set it up so that the animation will fire when a specific event like a click happens.

We can conditionally add CSS classes to add the animation. We need to add all of the animation properties into it's own class.

```css
.square-spin {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: linear;
}
```

Then we will create state on our component and write a method that will change the value on state from true to false, or false to true. Then we will conditionally add the class to the element depending on what state is.

```js
export default class App extends Component {
  constructor(){
    super();

    this.state = {
      spinning: false
    };

  };

  animate = () => {
    this.setState({
      spinning: !this.state.spinning
    })
  };

  render() {
    return (
      <div>
        <div className={
          this.state.spinning ?
          'square square-spin'
          :
          'square'} 
          onClick={this.animate}></div>
      </div>
    )
  }
};
```

### Transitions

Transitions are another way we can animate our elements. This time, the animation will just be a simple transition that will allow us to create smooth transitions.

All we need to do is use the `transition` property on our css elements. We will just define how long we want to the transition to happen.

```css
/* Transition Circle */
.transition-circle {
    height: 50px;
    width: 50px;
    margin: 25px auto;
    background: salmon;
    /* transition property to change values */
    transition: .2s
}

.transition-circle:hover {
    transform: scale(1.1);
    border-radius: 50%;
}
```

This will allow us to create simple animations on events such as a hover.
// The following is a calculation for the vertical offset of the 'top' property
// of a <div> that wraps around both the <header> and <nav> elements.  This <div>
// exists to give a box shadow on only the bottom border of the <nav> bar.  If
// I apply a box shadow directly to the <nav> bar, the shadow will be visible 
// on the top border as well as the bottom, breaking the illusion of a seamless
// transition from the <header> to the <nav> bar.  Surprisingly, there isn't any
// non-hacky way to apply a box shadow to only the bottom portion of an element,
// so I am wrapping both elements in a <div> and using its shadow instead. This
// however, presents another issue: the <nav> bars positioning of 'sticky' is 
// overridden by the 'shadow' <div>.  The desired result I want is for the <nav>
// bar to stick to the top of the window after scrolling through the <header>. 
// Since the <div> is overriding the <nav> positioning, the 'sticky' positioning
// must be applied to the <div> instead, and the 'top' property must be calculated
// to offset the height of the <header> that I want to scroll through.  The only
// other alternative to provide a shadow while keeping the <header>/<nav> 
// transition seamless is to set the y-offset of the shadow so high that it is
// hidden underneath the background of the <nav> itself.  This solution is not
// good enough for me, because it just offsets the shadow, making the bottom
// shadow bigger.

const header = document.querySelector('header');
const headerStyle = window.getComputedStyle(header);
const shadowDiv = document.getElementById('shadow');
shadowDiv.style.top = ('-' + headerStyle.height);


// The following has to occur every time the document resizes
// and every time the window resizes.  There has to be a better
// way to do this
const lastSection = document.getElementById('contact');
// I have to get sectMargin here dynamically, because the value 
// may change elsewhere in css for other projects
const section = document.querySelector('section');
const sectMargin = window.getComputedStyle(section).marginTop;
const viewPortHeight = window.innerHeight;
const navBar = document.querySelector('nav');
const navBarHeight = navBar.getBoundingClientRect().height;
lastSection.style.height = `calc(${viewPortHeight - navBarHeight}px - ${sectMargin})`;

// I'm thinking IF scrollbar reaches the end check to see if last
// element top border meets bottom border of <nav>.  IF not, add
// to the bottom margin of last element until TRUE.





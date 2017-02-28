# countdown-practice

Chatbomb's Chat Timer feature suffered from bugs, inconsistencies, and all around design-flaws.
In order to make Chatbomb2.1 work the way it should, I realized I needed to get the Chat Timer's
start/stop feature and the add-time feature working properly.<br />
<br />
Some of the difficulties:<br />
<ul>
<li>Data technically only flows down the component tree, not up.  Even updating parent component data/state
with functions passed down as props causes a re-rendering of the child component - in this case, the countdown -
which causes it to restart with the initial time value.</li>
<li>Functions that would trigger the adding of time will inevitably be called by events (particularly
socket-based events) taking place in the parent component.</li>
<li>I considered firing events in the parent component, which would pass down new props all the way down to
the countdown component which would have it fire off an internal add-time function, but again, the components
get re-rendered.</li>
</ul>
<br />
So far, the solution I've come up with is pretty hacky, and probably violates best practices across the board.<br />
Each countdown "tick", I'm storing the new remaining time in browser sessionStorage (after removing the old time)<br />
When the addTime() function gets called in the parent component, it pulls the current remaining time from<br />
sessionStorage, adds the 15 seconds to it, and passes it down to the Header component below it.<br />
I use basic conditional rendering in the Header components render() function to determine if this newTime<br />
prop exists, and if so, to render the Countdown component with the newTime prop instead of the standard<br />
30 second start time value.<br />
<br />
This all feels very...not right...to me, so if anyone has any suggestions, please feel free to share!<br />
I'm trying to figure out a better/more efficient/less hacky solution as we speak.

# RCV

Reading descriptions of the 2021 NYC Democratic primary, I was curious how hard it would be to implement a Ranked Choice Voting algorithm. I threw this together in JavaScript (node) to try it out. The `rcv.js` file has a short pretend ballot collection encoded as an array of arrays -- each array would be one voter's ballot, and each sub array is their listing of candidates in order of preference.

There's not much, or really any, attempt at robustness here. For instance, ties are not really handled at all. And JavaScript is a quick language to play around in but probably not the best choice for this domain. It's kind of silly to even put this up on github; I just thought, hey, after poking at this for about an hour, why not stick this someplace besides my laptop.

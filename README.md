This requires a little context.

This is a tweet by a bot that generates fake tumblr text:

> tumblr simulator ([@TumblrSimulator](https://twitter.com/TumblrSimulator))
>
> whats up you Discourse loving fucks
>
> [7:37 AM - 12 Mar 2016](https://twitter.com/TumblrSimulator/status/708678373921390593)

This is a take on the "whats up you meme loving fuck" dog meme described on [this Know Your Meme page](http://knowyourmeme.com/photos/1051932-dogs).

I was pretty taken with it:

> Jimmmmmmm Witschey ([@mambocab](https://twitter.com/mambocab))
>
> when ur friends are posting takes on line and you want in on the action
>
> https://twitter.com/TumblrSimulator/status/708678373921390593
>
> [8:29 AM - 17 Mar 2016](https://twitter.com/mambocab/status/710488179581784064)

> Jimmmmmmm Witschey ([@mambocab](https://twitter.com/mambocab))
>
> lmao I don't post many takes on here but I might start so I can lead w "whats up you Discourse loving fucks:" instead of "hot take:"
>
> [9:58 AM - 17 Mar 2016](https://twitter.com/mambocab/status/710510620286656513)

So, this is a Chrome extension that does that to Twitter. It'll replace the text `hot take:`, matched case-insensitively, with a string matching the regex `[wW]hat'?s up (u|you) [Dd]iscourse[- ]lovin[g']? fucks?\:`. It's pretty silly and I like it.

## Acknowledgements

[@TumblrSimulator](https://twitter.com/TumblrSimulator) is an excellent bot by Nora Reed ([Twitter](https://twitter.com/NoraReed) | [web](http://barrl.net/)).

This is a simplified version of [the like-to-communism Chrome Extension](https://github.com/aanand/like-to-communism) by Aanand Prasad ([Twitter](https://twitter.com/aanand) | [web](http://aanandprasad.com/)). I am grateful for its permissive license and its comprehensible Twitter-`sed`ding logic.

## Notes

I don't use the Twitter webapp very much. So, this may break without me noticing! _Caveat emptor_ and all that. I welcome issues and PRs, please bear in mind that I'm not likely to put much time into this plugin anytime soon.

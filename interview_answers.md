# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API helps to prevent massive prop drilling by enabling us to share state along a component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are Javascript functions which act as a source of information within redux. They carry information via a 'type' attribute from the app to the store. The store is immutable and holds the state within an application. Only one store is allowed in Redux. Reducers are needed for stores to function properly, as they specify the how an app's state will change. It uses actions to determine changes to state. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux Thunk is middleware which allows us to make React applications run asynchronously. In other words, we can set delay actions or specify when actions will be dispatched to avoid having having multiple actions running at once when they aren't needed. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

So far, I like redux-thunk, although I can see a valid reason for using context API. I really like how thunk allows for React applications to be set up to run asynchronously because we won't always want all of an app's functions or actions to run simultaneously. I also like that thunk is easy to set up and easy to use for smaller applications. Thunk's function logic is all contained in specified areas so it makes easy to refactor when necessary. 
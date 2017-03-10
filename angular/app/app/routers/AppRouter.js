const routes =
{
    base: [
        {path: '/', name: 'Home', component: 'home', redirectTo: '/home', useAsDefault: true},
    ],
    App: [
        {path: '/home', name: 'Home', component: 'home', useAsDefault: true},
        {path: '/signin', name: 'Signin', component: 'signin'},
        {path: '/signup', name: 'Signup', component: 'signup'},
        {path: '/forget', name: 'Forget', component: 'forget'},
    ],
    Home: [],
    Signup: [],
    Signin: [],
    Forget: [],
};

export {routes};
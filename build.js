console.log('MY_SECRET: ', process.env.MY_SECRET);
console.log('ALL ENVS: ', process.env);

if (process.env.APP_CRASH === 'true') {
  console.log('App crashed');
  process.exit(1);
}

import legacy from '@vitejs/plugin-legacy';

export default {
  plugins: [
    legacy({
      targets: [
        'chrome >= 70',
        'chromeandroid >= 70',
        'ios >= 12',
        'safari >= 12',
        'edge >= 18',
        'firefox >= 68'
      ]
    })
  ]
};

module.exports = {
  src_folders: ['e2e_tests'],
  output_folder: 'reports',
  //   custom_commands_path: '',
  //   custom_assertions_path: '',
  //   page_objects_path: '',
  //   globals_path: '',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};

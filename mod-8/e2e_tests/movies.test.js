module.exports = {
  'Show movies': function(client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('ul > li.movie-item', 1000)
      .assert.containsText('ul > li.movie-item', 'The Shawshank Redemption')
      .end();
  },

  Delete_Movie: client => {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('ul > li.movie-item', 1000)
      .assert.containsText('ul > li:nth-child(4).movie-item', "Schindler's List")
      .click('li:nth-child(4) button')
      .assert.containsText('ul > li:nth-child(4).movie-item', "The Godfather: Part II")
      .end();
  }
};

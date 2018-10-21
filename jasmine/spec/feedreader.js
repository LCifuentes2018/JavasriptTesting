/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined()
			expect(allFeeds.length).not.toBe(0)
		})
		/* Tests to make sure that the allFeeds object 
		 * and ensures it has a URL defined and that the 
		 * URL is not empty.
		 */
		it('urls are defined and not empty', function() {
			for (let count = 0; count < allFeeds.length; count++) {
				expect(allFeeds[count].url).toBeDefined()
				expect(allFeeds[count].url.length).not.toBe(0)
			}
		})
		/* Tests to make sure that the allFeeds object 
		 * and ensures it has a name defined and that the 
		 * name is not empty.
		 */
		it('names are defined and not empty', function() {
			for (let count = 0; count < allFeeds.length; count++) {
				expect(allFeeds[count].name).toBeDefined()
				expect(allFeeds[count].name.length).not.toBe(0)
			}
		})
	})
	describe('The menu', function() {
		/* Tests to make sure that the menu element is
		 * hidden by default. 
		 */
		it('menu is hidden', function() {
			expect($('body').hasClass('menu-hidden')).toEqual(true)
		})
		/* Tests to make sure that the menu changes
		 * visibility when the menu icon is clicked. 
		 */
		it('menu visibility clicked', function() {
			$('.menu-icon-link').trigger('click')
			expect($('body').hasClass('menu-hidden')).toEqual(false)
			$('.menu-icon-link').trigger('click')
			expect($('body').hasClass('menu-hidden')).toEqual(true)
		})
	})
	/* Test that ensures when the loadFeed
	 * function is called and completes its work.
	 */
	describe('Initial Entries', function() {
		beforeEach(function(done) {
			loadFeed(0, function() {
				done()
			})
		})
		it('entry more zero entries', function() {
			expect($('.entry .feed')).toBeDefined()
		})
	})
	/* Test that ensures when a new feed is loaded. */
	describe('New Feed Selection', function() {
		let feedEntry
		let newFeedEntry
		beforeEach(function(done) {
			loadFeed(0, function() {
				feedEntry = $('.feed').find(allFeeds.url)
				done()
				loadFeed(1, function() {
					newFeedEntry = $('.feed').find(allFeeds.url)
					done()
				})
			})
		})
		it('new feed different', function() {
			expect(feedEntry).not.toBe(newFeedEntry)
		})
	})
}())
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:3002')

        # Check if FLASH NEWS heading is present
        heading = page.locator('h2:has-text("FLASH NEWS")')
        print(f"FLASH NEWS heading found: {heading.is_visible()}")

        # Check archive link
        archive_link = page.locator('text="VIEW ARCHIVE →"')
        print(f"Archive link found: {archive_link.is_visible()}")

        # Check flash news articles (should be 8)
        # Using a selector that matches our cards
        cards = page.locator('section.border-t.pt-8.mt-16 a.group')
        print(f"Number of flash news cards found: {cards.count()}")

        if cards.count() > 0:
            first_card = cards.nth(0)
            tag = first_card.locator('span.font-mono')
            title = first_card.locator('h3')
            excerpt = first_card.locator('p')
            time_ago = first_card.locator('div.font-mono')

            print(f"First card has tag: {tag.is_visible()} - {tag.inner_text() if tag.is_visible() else ''}")
            print(f"First card has title: {title.is_visible()} - {title.inner_text() if title.is_visible() else ''}")
            print(f"First card has excerpt: {excerpt.is_visible()} - {excerpt.inner_text() if excerpt.is_visible() else ''}")
            print(f"First card has time ago: {time_ago.is_visible()} - {time_ago.inner_text() if time_ago.is_visible() else ''}")

        browser.close()

verify()

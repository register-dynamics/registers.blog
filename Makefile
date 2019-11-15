THIS_DIR := $(CURDIR)

PDFS = $(patsubst %.html,%.pdf,$(wildcard _site/*.html))

_site/: $(FILES)
	bundle exec jekyll build

# Set the base_url to be an absolute directory so that CSS and assets load properly
_pdfs/:
	bundle exec jekyll build -b "file:///${THIS_DIR}/_pdfs/" -d _pdfs/

# Sigh, render the page twice with different margins and then combine the first page
# and the other pages together to make a pretty PDF. Requires wkhtmltopdf and PdfToolkit
_site/%.pdf: _pdfs/%.html _pdfs/
	-wkhtmltopdf --disable-external-links -B 2cm -L 0mm -R 0mm -T 0mm --print-media-type --page-size A4 $< $@.TOP; \
	wkhtmltopdf --disable-external-links -B 2cm -L 0mm -R 0mm -T 2cm --print-media-type --page-size A4 $< $@.REST; \
	pdftk T=$@.TOP R=$@.REST cat T1 R2-end output $@; \
	rm $@.TOP $@.REST;

build: _site/ $(PDFS)


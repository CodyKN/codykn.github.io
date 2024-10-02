;; Set the package installation directory so that packages aren't stored in the
;; ~/.emacs.d/elpa path.
(require 'package)
(setq package-user-dir (expand-file-name "./.packages"))
(setq package-archives '(("melpa" . "https://melpa.org/packages/")
                         ("elpa" . "https://elpa.gnu.org/packages/")))

;; Initialize the package system
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

;; Install dependencies
(package-install 'htmlize)

(require 'org)
(require 'ox-publish)

(message "org-mode version: %s" org-version)

(setq org-html-html5-fancy t                  ;; Use HTML5-style elements
      org-html-validation-link nil            ;; Don't show validation link
      org-html-head-include-scripts nil       ;; Use our own scripts
      org-html-head-include-default-style nil ;; Use our own styles
      org-html-head "<link rel=\"stylesheet\" href=\"https://cdn.simplecss.org/simple.min.css\" />")

(setq org-publish-project-alist
      (list
       (list "org-site:main"
             :recursive t
             :base-directory "./content"
             :publishing-function 'org-html-publish-to-html
             :publishing-directory "./public"
             :with-author nil           ;; Don't include author name
             :with-creator nil          ;; Don't Emacs and Org versions in footer
             :section-numbers nil       ;; Don't include section numbers
	     :with-title nil            ;; Don't include title in page
	     :with-toc nil              ;; Don't include table of contents
             :time-stamp-file nil)))    ;; Don't include time stamp in file

(org-publish-all t)

(provide 'build-site)
;;; build-site.el ends here

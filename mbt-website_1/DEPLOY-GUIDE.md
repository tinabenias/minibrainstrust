# Getting Mini Brains Trust online (plain-English guide)

This is your whole website: the home page (the waitlist landing page) and the blog, all in one project that turns into fast, Google-friendly pages. Follow these steps once and you are live. The only thing that costs money is the domain name (about $15 to $20 a year). Everything else is free.

There are three short jobs only you can do (make two free accounts and buy a domain), then it publishes itself.

---

## Before you start: change two things to your domain

Once you have picked a domain (say `minibrainstrust.com`), open these two files and swap the placeholder for your real domain:

1. `astro.config.mjs` — change the `site:` line.
2. `public/robots.txt` — change the Sitemap web address.

If you would rather I do this for you once you have the domain, just tell me the domain and I will hand back the updated files.

---

## Step 1 — Buy a domain (about $15/yr)

Use any registrar. Cloudflare Registrar, Namecheap and GoDaddy are all fine. Buy the name you want (`.com`, or `.com.au` if you want the Aussie one). That is the only spend.

## Step 2 — Put the project on GitHub (free)

GitHub is just cloud storage for the project files, and it is what makes the site auto-update.

1. Create a free account at github.com.
2. The easiest way to upload without any command line is the free **GitHub Desktop** app (desktop.github.com). Install it, sign in, choose "Add" then "Create new repository", name it `mini-brains-trust`, and point it at this project folder. Click "Publish repository".
3. That is it. Your files now live on GitHub.

## Step 3 — Deploy on Netlify (free)

Netlify turns the files into the live website.

1. Create a free account at netlify.com (sign in with your GitHub account to keep it simple).
2. Click **Add new site → Import an existing project → GitHub**, and pick your `mini-brains-trust` repo.
3. Netlify reads the included `netlify.toml` and knows what to do. Just click **Deploy**.
4. In a minute or two you have a live site at a `something.netlify.app` address.

Every time you change something and it goes to GitHub, Netlify rebuilds the site automatically. You never touch a server.

## Step 4 — Point your domain at it

In Netlify: **Domain settings → Add a domain**, type your domain, and follow the DNS steps it gives you (you copy a couple of settings into your registrar). Netlify also gives you a free SSL certificate, so you get the padlock automatically.

## Step 5 — Turn on the waitlist inbox

The email form is already wired for Netlify. Once the site is live, every signup shows up under **Forms** in your Netlify dashboard. To get an email each time someone joins, go to **Site configuration → Forms → Form notifications** and add your email.

## Step 6 — Turn on the visual blog editor (/admin)

This is the one part that needs a couple of values from your own accounts, so it is the fiddliest. The editor lives at `yourdomain.com/admin`. To switch it on:

1. Open `public/admin/config.yml` and set the `repo:` line to `your-github-username/mini-brains-trust`.
2. Connect a login. The editor signs you in with GitHub, which needs a one-time GitHub OAuth setup.

This login step is best done together, because it needs details from your live Netlify and GitHub accounts. When you have finished steps 1 to 5, tell me and I will walk you through switching on the editor in a few minutes. Until then, you can still add or edit posts by changing the text files in `src/content/blog` (each post is one file).

---

## Writing a new blog post

Once the editor is on, you go to `yourdomain.com/admin`, log in, click **New Blog post**, fill in the title, a short description, pick a cover colour and a cover icon (any theme name like `birds`, `space`, `feelings`), write your article, and hit publish. A new page builds itself and appears on the blog and on the home page feed.

Prefer to skip the editor for now? Copy one of the existing files in `src/content/blog`, rename it, and change the text at the top and the body. Same result.

## Where the app goes

This project is your public, Google-facing site only. The Bolt app is a separate thing and lives on its own address like `app.yourdomain.com`. Keeping them apart is deliberate: this site is built to rank, the app sits behind a login and does not need to. You add the app subdomain in Netlify the same way as Step 4 when the app is ready.

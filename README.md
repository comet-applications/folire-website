# Folire website

Static marketing site for [folire.app](https://folire.app), designed for GitHub Pages.

## Local preview

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publishing

The repository includes a `CNAME` file for `folire.app`. In GitHub Pages, publish from the `main` branch root and enable HTTPS after DNS resolves.

### Squarespace DNS

Remove the Squarespace web-hosting defaults, but keep any mail or verification records. Add these records:

| Type | Name | Data |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `comet-applications.github.io` |

After DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS** in the repository's Pages settings.

# דף נחיתה - בניית אתרים

דף נחיתה מקצועי לשירותי בניית אתרים.

## התקנה מקומית

```bash
npm install
npm run dev
```

## בנייה לייצור

```bash
npm run build
```

## העלאה ל-GitHub ו-Netlify

### שלב 1: יצירת Repository ב-GitHub

1. היכנס ל-[github.com](https://github.com)
2. לחץ על **New Repository** (הכפתור הירוק)
3. תן שם ל-Repository (למשל: `landing-page`)
4. השאר את שאר ההגדרות כברירת מחדל
5. לחץ **Create Repository**

### שלב 2: העלאת הקבצים ל-GitHub

אפשרות א - דרך הממשק:
1. לחץ על **uploading an existing file**
2. גרור את כל הקבצים מהתיקייה
3. לחץ **Commit changes**

אפשרות ב - דרך Terminal:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/landing-page.git
git push -u origin main
```

### שלב 3: חיבור ל-Netlify

1. היכנס ל-[netlify.com](https://netlify.com)
2. לחץ **Add new site** → **Import an existing project**
3. בחר **GitHub**
4. בחר את ה-Repository שיצרת
5. ב-Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. לחץ **Deploy site**

### שלב 4: הגדרת דומיין (אופציונלי)

1. ב-Netlify, לך ל-**Domain settings**
2. לחץ **Add custom domain**
3. הכנס את הדומיין שלך ועקוב אחרי ההוראות

---

🎉 האתר שלך באוויר!

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Pruebas de Accesibilidad WCAG 2.1 AA - Municipalidad de Catemu', () => {
  test('Portada cumple normas de accesibilidad axe-core', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    
    // Inject and run axe accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'])
      .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Página de Trámites permite navegación por teclado', async ({ page }) => {
    await page.goto('http://localhost:3000/tramites');
    
    // Check skip link focus
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
  });
});

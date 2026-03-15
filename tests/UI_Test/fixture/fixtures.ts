import{test as base} from 'playwright-bdd';
import * as Pages from '../page/index';
import { Page } from '@playwright/test';

type MyFixtures = {
  samplelogInPage: Pages.SampleLoginPage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>
    use(new PageClass(page));

export const test = base.extend<MyFixtures>({
  samplelogInPage: createTestFunction(Pages.SampleLoginPage),
});
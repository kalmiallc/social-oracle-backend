import axios from 'axios';
import { env } from '../config/env';

export async function getGithubStats(username: string) {
  const res = await axios.post(
    'https://api.github.com/graphql',
    {
      query: `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            followers { 
              totalCount
            }
          }
        }
      `
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + env.GITHUB_AUTH
      }
    }
  );
  const contributions = res?.data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
  const followers = res?.data?.data?.user?.followers?.totalCount || 0;

  return { contributions, followers };
}

export const FeeContributionsTiers = [
  { contribution: 0, fee: 0.03 },
  { contribution: 100, fee: 0.025 },
  { contribution: 300, fee: 0.02 },
  { contribution: 500, fee: 0.015 },
  { contribution: 800, fee: 0.01 },
  { contribution: 1000, fee: 0.005 }
];

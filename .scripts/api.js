export async function getSyncedSandboxDetails(owner, repo, branch, folder) {
    const response = await fetch(`https://codesandbox.io/api/v1/sandboxes/github/${owner}/${repo}/tree/${branch}${folder ? `/${folder}` : ''}`);
    const data = await response.json();
    return data.data;
}
import { render, screen, waitFor } from '@testing-library/react'
import MoreAsync from './MoreAsync'

describe('should pass with correct case', () => {
    it('should render user with car', async () => {
        render(<MoreAsync name="bobby" />)
        await waitFor(() => {
            expect(screen.getByText('BOBBY drives a Hyundai')).not.toBeNull()
        })
    })
})
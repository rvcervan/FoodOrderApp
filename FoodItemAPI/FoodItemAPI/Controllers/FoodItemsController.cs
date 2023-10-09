using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodItemAPI.Models;

namespace FoodItemAPI.Controllers
{
    [Route("api/FoodItems")]
    [ApiController]
    public class FoodItemsController : ControllerBase
    {
        private readonly FoodContext _context;

        public FoodItemsController(FoodContext context)
        {
            _context = context;
        }

        // GET: api/FoodItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodItemDTO>>> GetFoodItems()
        {
          if (_context.FoodItems == null)
          {
              return NotFound();
          }
          return await _context.FoodItems
            .Select(x => ItemToDTO(x))
            .ToListAsync();
        }

        // GET: api/FoodItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FoodItemDTO>> GetFoodItem(string id)
        {
          if (_context.FoodItems == null)
          {
              return NotFound();
          }
          var foodItem = await _context.FoodItems.FindAsync(id);

          if (foodItem == null)
          {
              return NotFound();
          }

          return ItemToDTO(foodItem);
        }

        // PUT: api/FoodItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFoodItem(string id, FoodItemDTO foodDTO)
        {
            if (!String.Equals(id, foodDTO.Id))
            {
                return BadRequest();
            }

            //_context.Entry(foodDTO).State = EntityState.Modified;
            var foodItem = await _context.FoodItems.FindAsync(id);
            if(foodItem == null) 
            {
              return NotFound();
            }

            foodItem.Name = foodDTO.Name;
            foodItem.Description = foodDTO.Description;
            foodItem.Price = foodDTO.Price;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FoodItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FoodItemDTO>> PostFoodItem(FoodItemDTO foodDTO)
        {
          var foodItem = new FoodItem
          {
            Id = foodDTO.Id,
            Name = foodDTO.Name,
            Description = foodDTO.Description,
            Price = foodDTO.Price,
          };

          _context.FoodItems.Add(foodItem);
          await _context.SaveChangesAsync();

          //if (_context.FoodItems == null)
          //{
          //  return Problem("Entity set 'FoodContext.FoodItems'  is null.");
          //}
          //_context.FoodItems.Add(foodItem);
          //try
          //{
          //  await _context.SaveChangesAsync();
          //}
          //catch (DbUpdateException)
          //{
          //  if (FoodItemExists(foodDTO.Id))
          //  {
          //    return Conflict();
          //  }
          //  else
          //  {
          //    throw;
          //  }
          //}

      //return CreatedAtAction("GetFoodItem", new { id = foodItem.Id }, foodItem);
        return CreatedAtAction(nameof(GetFoodItem), new { id = foodItem.Id }, ItemToDTO(foodItem));
        }

        // DELETE: api/FoodItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodItem(string id)
        {
            if (_context.FoodItems == null)
            {
                return NotFound();
            }
            var foodItem = await _context.FoodItems.FindAsync(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            _context.FoodItems.Remove(foodItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FoodItemExists(string id)
        {
            return (_context.FoodItems?.Any(e => String.Equals(e.Id, id))).GetValueOrDefault();
        }

    private static FoodItemDTO ItemToDTO(FoodItem foodItem) =>
      new FoodItemDTO
      {
        Id = foodItem.Id,
        Name = foodItem.Name,
        Description = foodItem.Description,
        Price = foodItem.Price
      };
    }
}
